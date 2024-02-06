using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebSocketsChat.Application.Models;
using WebSocketsChat.DAL.DataServices;
using WebSocketsChat.Service.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

builder.Services.AddAuthentication().AddBearerToken(IdentityConstants.BearerScheme);
builder.Services.AddAuthorizationBuilder();

builder.Services.AddDbContext<ChatDbContext>(options => options.UseSqlite("DataSource=appdata.db"));

builder.Services.AddIdentityCore<ChatUser>()
    .AddEntityFrameworkStores<ChatDbContext>()
    .AddApiEndpoints();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("reactApp", policyBuilder =>
    {
        policyBuilder.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

builder.Services.AddSingleton<SharedInMemoDb>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("reactApp");

app.MapHub<ChatHub>("/Chat");

app.MapIdentityApi<ChatUser>();

app.Run();
