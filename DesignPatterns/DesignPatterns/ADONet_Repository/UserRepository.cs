using System;
using System.Collections.Generic;

namespace DesignPatterns.ADONet_Repository
{
    public class UserRepository
    {
        private AdoNetUnitOfWork _unitOfWork;

        public UserRepository(IUnitOfWork uow)
        {
            if (uow == null)
                throw new ArgumentNullException("uow");

            _unitOfWork = uow as AdoNetUnitOfWork;
            if (_unitOfWork == null)
                throw new NotSupportedException("Ohh my, change that UnitOfWorkFactory, will you?");
        }

        public List<Prueba> Get(Guid id)
        {
            using (var cmd = _unitOfWork.CreateCommand())
            {                
                cmd.CommandText = "SELECT * FROM dbo.Prueba";

                var dr = cmd.ExecuteReader();
                var list = new List<Prueba>();

                while (dr.Read()) {                    
                    list.Add(new Prueba { Columna = dr["Columna"].ToString() });                    
                }
                dr.Close();
                cmd.Dispose();

                return list;
            }
        }
    }
}
