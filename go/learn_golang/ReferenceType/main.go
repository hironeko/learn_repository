package main

// 第四章の学習：参照型
// 第五章の学習：構造体とインターフェース

import "fmt"

// MyInt int の　alias
type MyInt int

// Callback func
type Callback func(i int) int

func main() {
	// arrStandard()
	// fmt.Println(spreadArg(1, 3, 4, 1))
	fmt.Println(exSum())
}

func sampleSum(ints []int, callback Callback) int {
	var sum int
	for _, i := range ints {
		sum += i
	}
	return callback(sum)
}

func exSum() int {
	n := sampleSum(
		[]int{1, 2, 3, 4, 5},
		func(i int) int {
			return i * 2
		},
	)
	return n
}

func spreadArg(s ...int) int {
	n := 0
	for _, v := range s {
		n += v
	}
	return n
	//  s:= []int{1, 2, 3 }
	// spreadArg(s...) スライスを可変長引数として展開ができる
}

// make は必ず第一引数に型をとる
func arrStandard() {
	// var s []int
	// make で作るといかになる
	s := make([]int, 10) // 要素数が10個の配列を作成する ここでは、 0*10 となる
	fmt.Println(s)       // [0 0 0 0 0 0 0 0 0 0]
	fmt.Println(len(s))  // 10
	// 同じような作成方法
	s1 := []int{1, 2, 3, 4, 5}
	fmt.Println(s1)      // [1 2 3 4 5]
	fmt.Println(len(s1)) // 5
	// appendする
	s1 = append(s1, 6)
	fmt.Println(s1) // [1 2 3 4 5 6]

	//  最大要素数と要素数を別で指定する
	s2 := make([]int, 5, 10)
	fmt.Println(s2)      // [0 0 0 0 0]
	fmt.Println(len(s2)) // 5
	fmt.Println(cap(s2)) // cap == capasity  == 10

	// append のtips
	a1 := []int{1, 2}
	a2 := []int{3, 4}
	a3 := append(a1, a2...)
	// a3 := append(a1, []int{3, 4}...) と同じ
	fmt.Println(a3) // [1 2 3 4] 末に追加する
}
