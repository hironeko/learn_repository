package main

import (
	"fmt"
)

func plus(x, y int) int {
	return x + y
}

// 関数を代入
var plusAlias = plus

// 関数を返す関数
func returnFunc() func() {
	return func() {
		fmt.Println("i'm func")
	}
}

// 関数を引数にとる関数
func inFunc(f func()) {
	f()
}

// クロージャ
func later() func(string) string {
	var store string

	return func(next string) string {
		s := store
		store = next
		return s
	}
}

// 値はクロージャ間で共有されない
func integers() func() int {
	i := 0
	return func() int {
		i += 1
		return i
	}
}

func ifSyntax() string {
	if x, y := 1, 2; x < y {
		return "Yが大きよ"
	}
	return "Xのが大きよ"
}

func mixXY() string {
	x, y := 3, 5
	if n := x * y; n%2 == 0 {
		return "偶数だよ"
	}
	return "奇数だよ"
}

func main() {
	fmt.Println(mixXY())
	// r := plusAlias(10, 5)

	// fmt.Println(r)
	// f := returnFunc()
	// f()
	// inFunc(func() {
	// 	fmt.Println("in func")
	// })

	// l := later()
	// fmt.Println(l("Golang"))
	// fmt.Println(l("is"))
	// fmt.Println(l("awesome!!"))

	// ints := integers()
	// fmt.Println(ints()) // 1
	// fmt.Println(ints()) // 2

	// otherInts := integers()
	// fmt.Println(otherInts()) // 1 → ints()の値は共有されない
	// fmt.Println(Pi)          // . "package name" にすると省略ができる
	// fmt.Println(ifSyntax())
}
