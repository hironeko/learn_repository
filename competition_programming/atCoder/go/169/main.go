package main

import "fmt"

func main() {

}

func c() {
	// var a int
	// var b
	// fmt.Print()
}

func b() {
	var n, x int
	fmt.Scan(&n)
	i := 0
	s := 1
	for i <= n {
		fmt.Scan(&x)
		s = s * x
		i++
	}
	fmt.Println(s)
}
