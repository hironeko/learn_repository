package main

import (
	"fmt"
	"strings"
)

func main() {
	b()
}

func b() {
	var a int
	fmt.Scanf("%d", &a)
	b := a % 500
	r := a/500*1000 + b/5*5

	fmt.Println(r)
}

func a() {
	var a string
	fmt.Scanf("%s", &a)
	l := strings.Split(a, "")
	if l[2] == l[3] && l[4] == l[5] {
		fmt.Printf("Yes")
	} else {
		fmt.Printf("No")
	}
}
