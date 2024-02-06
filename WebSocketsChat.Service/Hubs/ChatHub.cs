using Microsoft.AspNetCore.SignalR;
using WebSocketsChat.Application.Models;
using WebSocketsChat.DAL.DataServices;

namespace WebSocketsChat.Service.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SharedInMemoDb _sharedDb;

        public ChatHub(SharedInMemoDb sharedDb)
        {
            _sharedDb = sharedDb;
        }
        public async Task JoinChat(UserConnection conn)
        {
            await Clients.All.SendAsync("ReceiveMessage", "admin", $"{conn.Username} has joined", Context.ConnectionAborted);
        }

        public async Task JoinSpecificChatRoom(UserConnection conn)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom, Context.ConnectionAborted);

            _sharedDb.Connections[Context.ConnectionId] = conn;

            await Clients.Group(conn.ChatRoom).SendAsync("JoinSpecificChatRoom", conn.Username, conn.ChatRoom, Context.ConnectionAborted);
        }

        public async Task SendMessage(string msg)
        {
            if (_sharedDb.Connections.TryGetValue(Context.ConnectionId, out UserConnection? conn))
            {
                await Clients.Group(conn.ChatRoom).SendAsync("ReceiveSpecificMessage", conn.Username, msg, Context.ConnectionAborted);
            }
        }
    }
}
