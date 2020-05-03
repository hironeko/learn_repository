package main

import (
	"fmt"
	"sort"
)

func main() {
	// fmt.Println(mixXY())
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
	// forMaxCount100()
	// forRange()
	// switchBasic()
	atCoder()
}

func atCoder() {

	var n, m int
	fmt.Scanf("%d %d", &n, &m)
	v := make([]int, n)
	r := 0
	for i := range v {
		fmt.Println(i)
		fmt.Scan(&v[i])
	}
	sort.Sort(sort.Reverse(sort.IntSlice(v)))
	for _, i := range v {
		r = r + i
	}
	fmt.Println(v[1-1])
	l := r / (m * 4)
	var a string
	if v[m-1] > l {
		a = "Yes"
	} else {
		a = "No"
	}
	fmt.Println(a)
}

func switchBasic() {
	n := 3
	switch n {
	case 1, 2:
		fmt.Println(" 1 or 2")
	case 3:
		fmt.Println("3 です")
	default:
		fmt.Println("unknown")
	}
}

func forRange() {
	f := [3]string{"apple", "banana", "cherry"}

	for i, s := range f {
		fmt.Printf("%d : %s\n", i, s)
	}
}

func forBasic() {
	for i := 0; i < 10; i++ {
		if i%2 == 0 {
			fmt.Println("yatta")
		}
		fmt.Println(i)
		i++
	}
}

func forMaxCount100() {
	i := 0
	for {
		fmt.Println(i)
		i++
		if i == 100 {
			fmt.Println("終わり")
			break
		}
	}
}

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
