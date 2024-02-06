namespace WebSocketsChat.Application.Models
{
    public class ChatGroup
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string UniqueName { get; set; } = string.Empty;
        List<ChatUser> Users { get; set; } = new List<ChatUser>();
    }
}
