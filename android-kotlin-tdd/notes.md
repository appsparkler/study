# Notes


## Basic Test:

```kt
class MathTest {
    @Test
    fun mathTest() {
//        Arrange
        var math = com.appsparkler.tdd_ch1.utils.Math();

//        Act
        var result = math.add(10, 15);

//        Assert
        assertEquals(25, result);
    }
}
```

## Parameterized Test:
```kt

@RunWith(value = Parameterized::class)
class ParametrizedMathTest(val a: Int, val b:Int, val expectedValue:Int) {

    @Test
    fun test() {
        val math = com.appsparkler.tdd_ch1.utils.Math();
        val result = math.add(a, b);
        assertEquals(result, expectedValue)
    }

    companion object {
        @JvmStatic
        @Parameters(name = "{index} : Sum of {0} and {1} is {2}")
        fun data():List<Array<Any>> {
            return listOf(
                arrayOf(10, 15, 25),
                arrayOf(20,30, 50),
                arrayOf(-12, -13, -25)
            )
        }
    }
}
```
