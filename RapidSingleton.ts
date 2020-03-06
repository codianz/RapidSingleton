
class Singleton
{
  private static sInstance?: Singleton = undefined;
  private static sFuncInstance = () => {
    Singleton.sInstance = new Singleton();
    Singleton.sFuncInstance = () => Singleton.sInstance!;
    return Singleton.sInstance;
  };
  public static get Instance() { return Singleton.sFuncInstance(); }
}

class SingletonOld
{
  private static sInstance?: SingletonOld = undefined;
  public static get Instance() { 
    if(SingletonOld.sInstance) return SingletonOld.sInstance;
    SingletonOld.sInstance = new SingletonOld();
    return SingletonOld.sInstance; 
  }
}

const t0 = performance.now();


for(let i = 0; i < 100000000; i++){
  Singleton.Instance;
}

const t1 = performance.now();

for(let i = 0; i < 100000000; i++){
  SingletonOld.Instance;
}

const t2 = performance.now();

console.log(`t0 ~ t1 : ${t1 - t0}ms`);
console.log(`t1 ~ t2 : ${t2 - t1}ms`);

// x 53 faster
// t0 ~ t1 : 50.8900000131689ms
// t1 ~ t2 : 2678.6900000006426ms