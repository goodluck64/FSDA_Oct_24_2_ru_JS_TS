var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors(b =>
{
    b.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
});

app.MapGet("/login", async (HttpContext context) =>
{
    context.Response.StatusCode = 200;
    context.Response.ContentType = "text/html";

    if (context.Request.Cookies.ContainsKey("auth"))
    {
        await context.Response.WriteAsync("""
                                          <div style="color: deeppink;">
                                          Hello <3
                                          </div>
                                          """);
    }
    else
    {
        await context.Response.WriteAsync("""
                                          <div style="color: red;">
                                          Who are you!?
                                          </div>
                                          """);
    }


    return;
});


app.Run();