# Aの問題
# a, b = map(int, input().split())

# print(a*b)

# Bの問題
n = int(input())
x = map(int, input().split())
s = 1
for v in x:
    s = s * v

if 10 ** 18 <= s:
    print("-1")
else:
    print(s)


# Cの問題
# import math
# a, b = input().split()
# print(math.floor(int(a)*float(b)))
