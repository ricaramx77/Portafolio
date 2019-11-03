using System.Configuration;
using System.Data.SqlClient;

namespace DesignPatterns.ADONet_Repository
{
    public class UnitOfWorkFactory
    {
        public static IUnitOfWork Create()
        {
            var connection = new SqlConnection
             (ConfigurationManager.ConnectionStrings["MyDb"].ConnectionString);
            connection.Open();

            return new AdoNetUnitOfWork(connection, true);
        }
    }
}
