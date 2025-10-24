using AJAXWebApplication.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddSingleton<DollGenerator>();

var app = builder.Build();

app.UseHttpsRedirection();

app.MapGet("dolls", async (DollGenerator generator) => { return Results.Ok(generator.Generate()); });

app.UseCors(b =>
{
    b.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
});

app.Run();