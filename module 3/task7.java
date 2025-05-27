public class TypeCastingExample {
    public static void main(String[] args) {
        double doubleVal = 9.78;
        int intVal = (int) doubleVal;  // Casting double to int

        int intVal2 = 10;
        double doubleVal2 = (double) intVal2;  // Casting int to double

        System.out.println("Double value: " + doubleVal);
        System.out.println("After casting to int: " + intVal);
        System.out.println("Int value: " + intVal2);
        System.out.println("After casting to double: " + doubleVal2);
    }
}
