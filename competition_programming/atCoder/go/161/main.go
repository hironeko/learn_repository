package main

import (
	"fmt"
	"sort"
)

func main() {
	b()
}

// 一個だけテストで落ちる
func b() {
	var n, m int
	fmt.Scanf("%d %d", &n, &m)
	v := make([]int, n)
	r := 0
	for i := range v {
		fmt.Scan(&v[i])
		r += v[i]
	}

	// 降順でソートをする
	sort.Sort(sort.Reverse(sort.IntSlice(v)))

	if v[m-1] > int(r/(m*4)) {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}

func a() {

	var x, y, z int
	fmt.Scanf("%d %d %d", &x, &y, &z)

	fmt.Println(z, x, y)

}
