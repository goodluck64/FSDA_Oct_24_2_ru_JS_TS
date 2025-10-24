using System.Net;
using System.Text.RegularExpressions;

using var httpListener = new HttpListener();
var manualResetEvent = new ManualResetEvent(false);
httpListener.Prefixes.Add("http://localhost:9090/form-test/");

httpListener.Start();

_ = Task.Factory.StartNew(async () =>
{
    while (true)
    {
        var context = await httpListener.GetContextAsync();

        if (context.Request.HttpMethod == HttpMethod.Post.Method)
        {
            var streamReader = new StreamReader(context.Request.InputStream);

            Console.WriteLine(streamReader.ReadToEnd());
        }
    }
}, TaskCreationOptions.LongRunning);

manualResetEvent.WaitOne();