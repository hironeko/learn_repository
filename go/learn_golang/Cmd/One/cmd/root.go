package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var RootCmd = &cobra.Command{
	Use: "culc",
	Short: "command line calculator",
	Run: func(cmd *cobra.Command, args [string]) {
		fmt.Println("root command")
	}
}

func init() {
	cobra.OnInitialize()
	RootCmd.AddCommand(
		sumCmd()
	)
}