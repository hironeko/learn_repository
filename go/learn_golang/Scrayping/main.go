package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "http://localhost:8080"

	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	byteArray, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(byteArray))
}
