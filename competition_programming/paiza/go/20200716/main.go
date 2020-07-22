package main

import "fmt"

func main() {
	d122()
}

func d122() {
	var i int
	fmt.Scan(&i)
	v := i * (i - 1) / 2
	fmt.Print(v)
}

func d166() {
	var a, b int
	fmt.Scanf("%d %d", &a, &b)

	fmt.Print(1*a - 1*b)
}
