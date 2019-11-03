using System;
using System.Data;

namespace DesignPatterns.ADONet_Repository
{
    public class AdoNetUnitOfWork : IUnitOfWork
    {
        private IDbConnection _connection;
        private bool _ownsConnection;
        private IDbTransaction _transaction;


        public AdoNetUnitOfWork(IDbConnection connection, bool ownsConnection)
        {
            _connection = connection;
            _ownsConnection = ownsConnection;
            _transaction = connection.BeginTransaction();
        }

        public IDbCommand CreateCommand()
        {
            var command = _connection.CreateCommand();
            command.Transaction = _transaction;
            return command;
        }

        public void SaveChanges()
        {
            if (_transaction == null)
                throw new InvalidOperationException
                 ("Transaction have already been committed. Check your transaction handling.");

            _transaction.Commit();
            _transaction = null;
        }

        public void Dispose()
        {
            if (_transaction != null)
            {
                _transaction.Rollback();
                _transaction = null;
            }

            if (_connection != null && _ownsConnection)
            {
                _connection.Close();
                _connection = null;
            }
        }
    }
}
