export default {
  inject: ['counter'],
  data() {
    return {
      len: 2,
      key: 'trees'
    }
  },
  computed: {
    numbers() {
      const val = this.counter.value;
      if(!val || val[this.key] < 0) return new Array(this.len).fill(0);

      const vals = [];
      const numbers = val[this.key].toString().split('').map(n => parseInt(n));
      let i = this.len;
      let j = numbers.length - 1;

      while(i > 0) {
        if(j < 0) vals.unshift(0);
        else vals.unshift(numbers[j]);
        j--;
        i--;
      }

      return vals;
    }
  }
}
