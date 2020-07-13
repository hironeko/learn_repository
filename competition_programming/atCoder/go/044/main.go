package main

import "fmt"

func main() {
	var t, n, a, b, c, d int
	fmt.Scan(&t)
	arr := []int{}
	i := 0
	for {
		if i == t {
			break
		}
		fmt.Scan(&n, &a, &b, &c, &d)
		arr = append(arr, result(n, a, b, c, d))
		i++
	}
	fmt.Println(arr)
}

func result(n, a, b, c, d int) int {
	x := 0
	// 最小値 ..... 最大値の順で計算して最終的にdで微調整を行う
	if x == n {
		return 1
	}
	return 0
}
