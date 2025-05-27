public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2; // Multiplication first, then addition
        System.out.println("Result of 10 + 5 * 2 = " + result);

        int result2 = (10 + 5) * 2; // Parentheses change precedence
        System.out.println("Result of (10 + 5) * 2 = " + result2);

        int complex = 10 + 20 / 5 * 3 - 4; 
        // Division and multiplication first (left to right), then addition and subtraction
        System.out.println("Result of 10 + 20 / 5 * 3 - 4 = " + complex);
    }
}
