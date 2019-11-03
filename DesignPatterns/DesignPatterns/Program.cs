using DesignPatterns.Adapter;
using DesignPatterns.ADONet_Repository;
using DesignPatterns.Bridge;
using DesignPatterns.Builder;
using DesignPatterns.ChainOfResponsability;
using DesignPatterns.Command;
using DesignPatterns.CommandGeneric;
using DesignPatterns.Decorator;
using DesignPatterns.Dependency_Injection;
using DesignPatterns.Facade;
using DesignPatterns.Factory;
using DesignPatterns.Genericos;
using DesignPatterns.Memento;
using DesignPatterns.MyTrafficLight;
using DesignPatterns.n_Tier.CompositioRoot;
using DesignPatterns.Prototype;
using DesignPatterns.Template_Method;
using ObserverTest;
using StatePatternSampleApp.StatePattern;
using System;

namespace DesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {
            int pId;
            pId = 17;

            switch (pId)
            {
                case 1:
                    Adapter();
                    break;
                case 2:
                    Bridge();
                    break;
                case 3:
                    Facade();
                    break;
                case 4:
                    Command();
                    break;
                case 5:
                    CommandGeneric();
                    break;
                case 6:
                    Factory();
                    break;
                case 7:
                    SingletonPattern();
                    break;
                case 8:
                    TemplateMethod();
                    break;
                case 9:
                    Prototype();
                    break;
                case 10:
                    Builder();
                    break;
                case 11:
                    State();
                    break;
                case 12:
                    Observer();
                    break;
                case 13:
                    Decorator();
                    break;
                case 14:
                    DependencyInjection();
                    break;
                case 15:
                    nTier();
                    break;
                case 16:
                    ADONet_Repository();
                    break;
                case 17:
                    Memento();
                    break;
                case 18:
                    Genericos();
                    break;
                case 19:
                    MyTrafficLight();
                    break;
				case 20:
					ChainOfResponsability();
					break;
				default:                    
                    break;
            }
        }

        private static void Adapter()
        {
            ITarget Itarget = new EmployeeAdapter();
            ThirdPartyBillingSystem client = new ThirdPartyBillingSystem(Itarget);
            client.ShowEmployeeList();

            Console.ReadKey();
        }

        private static void Bridge()
        {
            IMessageSender email = new EmailSender();
            IMessageSender queue = new MSMQSender();
            IMessageSender web = new WebServiceSender();

            Message message = new SystemMessage();
            message.Subject = "Test Message";
            message.Body = "Hi, This is a Test Message";

            message.MessageSender = email; //<----------Hace referencia a la propiedad IMessageSender
            message.Send();

            message.MessageSender = queue;
            message.Send();

            message.MessageSender = web;
            message.Send();

            UserMessage usermsg = new UserMessage();
            usermsg.Subject = "Test Message";
            usermsg.Body = "Hi, This is a Test Message";
            usermsg.UserComments = "I hope you are well";

            usermsg.MessageSender = email;
            usermsg.Send();

            Console.ReadKey();
        }

        private static void Facade()
        {
            CarFacade facade = new CarFacade();
            facade.CreateCompleteCar();

            Console.ReadKey();
        }

        private static void Command()
        {
            SimpleRemoteControl remote = new SimpleRemoteControl();

            Light light = new Light();

            LightOnCommand lightOn = new LightOnCommand(light);
            remote.SetCommand(lightOn);
            remote.ButtonWasPressed();

            LightOffCommand lightOff = new LightOffCommand(light);
            remote.SetCommand(lightOff);
            remote.ButtonWasPressed();

            Console.ReadKey();
        }

        private static void CommandGeneric()
        {
            SimpleRemoteControl remote = new SimpleRemoteControl();

            Light light = new Light();
            TV tv = new TV();
            Radio radio = new Radio();

            var lightOn = new Command<Light>(light, l => l.TurnOn());
            var lightOff = new Command<Light>(light, l => l.TurnOff());

            var securityLightOn = new Command<Light>(light, l => l.TurnOn());
            var securityLightOff = new Command<Light>(light, l => l.TurnOff());

            var tvOn = new Command<TV>(tv, l => l.TurnOn());
            var tvOff = new Command<TV>(tv, l => l.TurnOff());

            var radioOn = new Command<Radio>(radio, l => l.TurnOn());
            var radioOff = new Command<Radio>(radio, l => l.TurnOff());

            remote.SetCommand(lightOn);
            remote.ButtonWasPressed();

            remote.SetCommand(lightOff);
            remote.ButtonWasPressed();

            //-----------------------------
            remote.SetCommand(securityLightOn);
            remote.ButtonWasPressed();
            
            remote.SetCommand(securityLightOff);
            remote.ButtonWasPressed();            

            //-----------------------------
            remote.SetCommand(tvOn);
            remote.ButtonWasPressed();

            remote.SetCommand(tvOff);
            remote.ButtonWasPressed();

            //-----------------------------
            remote.SetCommand(radioOn);
            remote.ButtonWasPressed();

            remote.SetCommand(radioOff);
            remote.ButtonWasPressed();

            Console.ReadKey();
        }

        private static void Factory()
        {
            VehicleFactory factory = new ConcreteVehicleFactory();

            IFactory scooter = factory.GetVehicle("Scooter");
            scooter.Drive(10);

            IFactory bike = factory.GetVehicle("Bike");
            bike.Drive(20);

            Console.ReadKey();
        }

        private static void SingletonPattern()
        {
            Singleton.Singleton.Instance.Show();
            Singleton.Singleton.Instance.Show();

            Console.ReadKey();
        }

        private static void TemplateMethod()
        {
            XMLDocument document = new XMLDocument();
            document.Print();
            document.PrintBody();
            document.PrintHeader();

            HTMLDocument document2 = new HTMLDocument();
            document2.Print();
            document2.PrintBody();
            document2.PrintHeader();

            Console.ReadKey();
        }

        private static void Prototype()
        {
            Developer dev = new Developer();
            dev.Name = "Rahul";
            dev.Role = "Team Leader";
            dev.PreferredLanguage = "C#";

            Developer devCopy = (Developer)dev.Clone();
            devCopy.Name = "Arif"; //Not mention Role and PreferredLanguage, it will copy above

            Console.WriteLine(dev.GetDetails());
            Console.WriteLine(devCopy.GetDetails());

            Typist typist = new Typist();
            typist.Name = "Monu";
            typist.Role = "Typist";
            typist.WordsPerMinute = 120;

            Typist typistCopy = (Typist)typist.Clone();
            typistCopy.Name = "Sahil";
            typistCopy.WordsPerMinute = 115;//Not mention Role, it will copy above

            Console.WriteLine(typist.GetDetails());
            Console.WriteLine(typistCopy.GetDetails());

            Console.ReadKey();
        }

        private static void Builder()
        {
            var vehicleCreator = new VehicleCreator(new BMWBuilder());
            vehicleCreator.CreateVehicle();
            var vehicle = vehicleCreator.GetVehicle();
            vehicle.ShowInfo();

            Console.WriteLine("---------------------------------------------");

            vehicleCreator = new VehicleCreator(new HondaBuilder());
            vehicleCreator.CreateVehicle();
            vehicle = vehicleCreator.GetVehicle();
            vehicle.ShowInfo();

            Console.ReadKey();
        }

        private static void State()
        {
            ATM atm = new ATM();
            atm.StartTheATM();
        }

        private static void MyTrafficLight()
        {
            TrafficLight trafficLight = new TrafficLight();
            trafficLight.StartTrafficLight();
        }

        private static void Observer()
        {
            Product product = new Product();

            // We have four shops wanting to keep updated price set by product owner
            Shop shop1 = new Shop("Shop 1");
            Shop shop2 = new Shop("Shop 2");
            Shop shop3 = new Shop("Shop 3");
            Shop shop4 = new Shop("Shop 4");

            //Lets use ArrayList for first two shops
            product.Suscribe(shop1);
            product.Suscribe(shop2);
            
            //Lets use event-delegate for other two shops
            product.Suscribe2(shop3);
            product.Suscribe2(shop4);

            Console.WriteLine("Todas las tiendas se han suscrito");

            //Now lets try chaging the products price, this should update the shops automatically
            product.ChangePrice(23.0f); //<------------------Notifica a todas las tiendas
            
            //Now shop2 and shop 4 are not interested in new prices so they unsubscribe
            product.Unsuscribe(shop2);
            product.Unsuscribe2(shop4);

            Console.WriteLine("La tienda 2 y 4 han cancelado su suscripción");

            //Now lets try changing the products price again
            product.ChangePrice(26.0f);//<------------------Notifica a la tienda 1 y 3

            Console.Read();
        }

        private static void Decorator()
        {
            Beverage oBeverage2 = default(Beverage);
            oBeverage2 = new DarkRoast();

            //Agrega condimentos (tecnica Composition)
            oBeverage2 = new Mocha(oBeverage2);
            oBeverage2 = new Mocha(oBeverage2);
            oBeverage2 = new Whip(oBeverage2);

            Console.WriteLine(oBeverage2.getFullDescription() + " $" + oBeverage2.getTotalCost());

            Beverage beverage3 = new HouseBlend();
            beverage3 = new Soy(beverage3);
            beverage3 = new Mocha(beverage3);
            beverage3 = new Whip(beverage3);
            beverage3 = new Whip(beverage3);

            //Console.WriteLine(beverage3.getFullDescription() + " $" + beverage3.getTotalCost());
            Console.Read();
        }

        private static void DependencyInjection()
        {
            Client client = new Client(new Service2());
            client.Start();
            Console.Read();
        }

        private static void nTier()
        {
            var compositioRoot = new CompositioRoot();
            compositioRoot.InicializarUnity();           

            Console.Read();
        }

        private static void ADONet_Repository()
        {
            using (var uow = UnitOfWorkFactory.Create())
            {
                var repos = new UserRepository(uow);

                Guid guid = new Guid();
                var resultado = repos.Get(guid);

                resultado.ForEach(i => Console.Write(i.Columna +"\r\n", i));
                
                uow.SaveChanges();
                Console.Read();
            }
        }

        private static void Memento()
        {
			SalesProspect s = new SalesProspect(); //<-------------Originator (datos originales, puede crear un mememento o restaurarlo)
			s.Name = "Noel van Halen";
			s.Phone = "(412) 256-0990";
			s.Budget = 25000.0;

			// Store internal state
			ProspectMemory m = new ProspectMemory(); //<------------------Caretaker (repositorio)
			m.Memento = s.SaveMemento();

			// Continue changing originator
			s.Name = "Leo Welch";
			s.Phone = "(310) 209-7111";
			s.Budget = 1000000.0;

			// Restore saved state
			s.RestoreMemento(m.Memento); //<---------------------------Vuelve a dejar los datos como estaban

			// Wait for user
			Console.ReadKey();
		}

        private static void Genericos()
        {            
            try
            {
                Seleccionador<int> selInt = new Seleccionador<int>();
                Console.WriteLine(selInt.Mayor(3, 5));
                Console.Read();

                //Seleccionador<MiClase> sel = new Seleccionador<MiClase>();
                //MiClase x1 = new MiClase();
                //MiClase x2 = new MiClase();
                //Console.WriteLine(sel.Mayor(x1, x2));
                //Console.Read();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }           
        }

		private static void ChainOfResponsability()
		{
			try
			{
				// Setup Chain of Responsibility
				Approver director = new Director();
				Approver vicePresidente = new VicePresident();
				Approver presidente = new President();

				director.SetSuccessor(vicePresidente);
				vicePresidente.SetSuccessor(presidente);

				// Generate and process purchase requests
				Purchase p = new Purchase(2034, 350.00, "Assets");
				director.ProcessRequest(p);

				p = new Purchase(2035, 72590.10, "Project X");				
				director.ProcessRequest(p);

				p = new Purchase(2036, 122100.00, "Project Y");
				director.ProcessRequest(p);

				// Wait for user

				Console.ReadKey();
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
    }
}
