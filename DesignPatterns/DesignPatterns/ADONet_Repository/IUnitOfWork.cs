using System;
using System.Data;

namespace DesignPatterns.ADONet_Repository
{
    public interface IUnitOfWork: IDisposable
    {
        IDbCommand CreateCommand();
        void SaveChanges();
        void Dispose();
    }
}
