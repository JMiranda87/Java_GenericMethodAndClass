export class DemoClass {
  public genericsMethod<T>(data: T): void {
    console.log("Generics Method:");
    console.log("Data Passed:", data);
  }
}