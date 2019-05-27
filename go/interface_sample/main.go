package main

import "fmt"

type Person struct {
	FirstName string
	LastName  string
}

func (p *Person) Nam() string {
	return p.FirstName + " " + p.LastName
}

type Named interface {
	Nam() string
}

func printName(named Named) {
	fmt.Println(named.Nam())
}

func main() {
	person := Person{"Tarou", "Yamada"}
	printName(&person)
}
