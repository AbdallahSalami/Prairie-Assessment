var num = 30;
flag = true;

for (i = 2; i < num; i++) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = false;

      break;
    }
  }
  if (flag) {
    console.log(i);
  }
}
