using System.Net;

var httpListener = new HttpListener();

httpListener.Prefixes.Add("http://localhost:8888/login/");

httpListener.Start();

while (true)
{
    var context = httpListener.GetContext();

    context.Response.StatusCode = 200;
    context.Response.ContentType = "text/html";

    var streamWriter = new StreamWriter(context.Response.OutputStream);

    if (context.Request.Cookies.Contains(new Cookie("auth", null)))
    {
        streamWriter.Write("""
                           <div style="color: deeppink;">
                           Hello <3
                           </div>
                           """);
    }
    else
    {
        streamWriter.Write("""
                           <div style="color: red;">
                           Who are you!?
                           </div>
                           """);
    }

    streamWriter.Flush();
    context.Response.OutputStream.Close();
}