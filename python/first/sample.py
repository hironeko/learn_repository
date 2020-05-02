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


# クロージャ

def outDef(arg):
    def inDef():
        return 'name :' + arg
    return inDef


f = outDef('taro')
s = outDef('sakurako')
print(f())  # name :taro
print(s())  # name :sakurako


# lamda関数

def sum_number(num1, num2): return num1 + num2
# sum_number = lambda num1, num2: num1 + num2


print('sum : ', sum_number(3, 4))  # sum : 7


# 空のクラス
class Hoge:
    pass


hoge = Hoge()
hoge.fuga = 'yattttaaaa'

print(hoge.fuga)  # yattttaaaa
