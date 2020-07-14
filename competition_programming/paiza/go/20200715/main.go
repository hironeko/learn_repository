package main

import (
	"fmt"
)

func main() {
	d58()
}

func d58() {
	var a,b string
	fmt.Scan(&a)
	fmt.Scan(&b)
	fmt.Print(a + "@" + b)	
}
func d243() {
	var a, b int
	fmt.Scan(&a)
	fmt.Scan(&b)
	fmt.Print(a/b)
}