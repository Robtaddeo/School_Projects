class Battery implements Cloneable
{
    int volts;
    Battery()
    {
        volts = 375;
    }
    public Object clone() throws
                   CloneNotSupportedException
    {
        return super.clone();
    }
}