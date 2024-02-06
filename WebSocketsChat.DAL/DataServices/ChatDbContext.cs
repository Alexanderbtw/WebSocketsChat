using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebSocketsChat.Application.Models;

namespace WebSocketsChat.DAL.DataServices
{
    public class ChatDbContext : IdentityDbContext<ChatUser>
    {
        public ChatDbContext(DbContextOptions<ChatDbContext> options) : base(options) { }

        public DbSet<ChatGroup> Groups { get; set; }
    }
}
