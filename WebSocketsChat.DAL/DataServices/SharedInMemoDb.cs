using System.Collections.Concurrent;
using WebSocketsChat.Application.Models;

namespace WebSocketsChat.DAL.DataServices
{
    public class SharedInMemoDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new();

        public ConcurrentDictionary<string, UserConnection> Connections => _connections;
    }
}
