using System.Collections.Concurrent;
using WebSocketsChat.Service.Models;

namespace WebSocketsChat.Service.DataServices
{
    public class SharedInMemoDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new();

        public ConcurrentDictionary<string, UserConnection> Connections => _connections;
    }
}
