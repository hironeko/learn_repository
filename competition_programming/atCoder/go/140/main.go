package main

import "fmt"

func main() {
	a()
}

func a() {
	var n int
	fmt.Scanf("%d", &n)
	fmt.Println(n * n * n)
}
