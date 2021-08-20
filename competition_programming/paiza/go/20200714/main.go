package main

import (
	"fmt"
)

func main() {
}

func d99() {
	var i string
	fmt.Scan(&i)
	fmt.Print(len(i))
}

func d21() {
	var a, b string
	fmt.Scan(&a)
	fmt.Scan(&b)
	if a == b {
		fmt.Print("Yes")
	} else {
		fmt.Println(("No"))
	}
}

// Cの問題 *入出力例は正解だけど提出時全問不正解の謎
func c() {
	var v, i, m, p int
	fmt.Scanf("%d %d", &v, &i)
	p = 0
	for c := 0; c < i; c++ {
		fmt.Scan(&m)
		t := m / 100 * 10
		if m <= p {
			p -= m
		} else {
			v -= m
			p += t
		}
		fmt.Printf("%d %d\n", v, p)
	}
}
