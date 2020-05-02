name = 'sample'
print(name)

number = 99
# if文
if number != 100:
    print('do not 100')

# 入力の受け取り
str = input()
print('入力された値' + str)

# 結合
arr = ['test', '検証', 'お試し']
print(''.join(arr))  # test検証お試し


# 関数
def sumNumber(f, s):
    print(f + s)


sumNumber(2, 4)  # 6


# 可変個数の引数
def sNumber(*args):
    print(args)


sNumber(2, 3, 4, 8)  # (2, 3, 4,8)


# 辞書化
def dKeyWord(**args):
    print(args)


# {'first': 'one', 'second': 'two', 'third': 'three'}
dKeyWord(first='one', second='two', third='three')


# 関数内関数？
def out():
    def inner():
        print('関数の中の関数です')
    inner()


out()  # 関数の中の関数です
