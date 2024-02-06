using Microsoft.AspNetCore.Identity;

namespace WebSocketsChat.Application.Models
{
    public class ChatUser : IdentityUser
    {
        List<ChatGroup> Groups { get; set; } = new List<ChatGroup>();
    }
}
