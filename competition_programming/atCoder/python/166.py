# Aの解答
i = input()
if i == "ABC":
    print("ARC")
else:
    print("ABC")

# Bの解答
n, k = map(int, input().split())
d = [0]*n  # 0 * n個分の要素数の配列を作成 ex. [0, 0, 0, 0, .....]
for _ in range(k):
    input()
    l = (list(map(int, input().split())))
    for i in l:
        d[i - 1] = 1  # 0を1に変更する

print(d.count(0))  # 0の要素の個数をカウント
