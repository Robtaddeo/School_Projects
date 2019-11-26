class Tesla implements Cloneable
{
   int price;
   int top_speed;
   Battery battery;
   Factory factory;
   Tesla(Factory f)
   {
       factory = f;
       price = 35000;
       top_speed = 160;
       battery = new Battery();
   }
   
   public Object clone() throws
   CloneNotSupportedException
	{
		Tesla t = (Tesla)super.clone();
		
		t.battery = (Battery)t.battery.clone();
		
		return t;
	}
}