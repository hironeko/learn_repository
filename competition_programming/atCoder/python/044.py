t = int(input())
# n, a, b, c, d = map(int, input().split())

tt = [[]*t]
for i in range(0, t - 1):
    if i + 1 == t:
        break
    n, a, b, c, d = map(int, input().split())
    tt[i] = [a, b, c, d]
print(tt)
