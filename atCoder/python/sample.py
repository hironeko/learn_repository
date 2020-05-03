# -*- coding: utf-8 -*-

# 入力sample
# 1
# 2 3
# test

# 整数の入力
a = int(input())
# スペース区切りの整数の入力
b, c = map(int, input().split())
# 文字列の入力
s = input()
# 出力
print("{} {}".format(a+b+c, s))  # 6 test と出力される
