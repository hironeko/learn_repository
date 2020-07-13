import math
# B
# i = int(input())
# v=[]
# ac =0
# wa =0
# tle=0
# re =0
# for _ in range(0, i):
#     v.append(input())


# for value in v:
#     if value == 'AC':
#         ac += 1
#     elif value == 'WA':
#         wa += 1
#     elif value == 'TLE':
#         tle += 1
#     elif value == 'RE':
#         re += 1

# print('AC x %d' % ac)
# print('WA x %d' % wa)
# print('TLE x %d' % tle)
# print('RE x %d' % re)


#A 
i = int(input())

s, f = math.modf(i/1000)
if s != 0.0:
    f += 1
v = int((f) * 1000) - i
if v >= 1000:
    print(2000 - v)
else:
    print(v)

# if 0 < i < 1000:
#     print(1000 - i)
# print(i)

# while True:
#     i = i-1000
#     if 0 < i < 1000:
#         print(1000 - i)
#         break
#     elif i == 0:
#         print(0)
#         break