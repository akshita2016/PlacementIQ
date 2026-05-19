export const oopsData = {
  id: "oops",
  title: "Object Oriented Programming",
  description: "Master the design patterns used in modern software development. Crucial for writing scalable, maintainable, and clean code.",
  color: "from-blue-600 via-indigo-600 to-violet-600",
  topics: [
    {
      id: "core-concepts",
      title: "Core Concepts",
      description: "Classes, Objects, Constructors, and Memory.",
      questions: [
        {
          id: "oops-core-1",
          question: "What is Object-Oriented Programming (OOP)?",
          difficulty: "Easy",
          answer: "OOP is a programming paradigm based on the concept of 'objects', which can contain data (in the form of fields or attributes) and code (in the form of procedures or methods). It aims to bind data and the functions that operate on them together.",
          notes: "Contrasts with procedural programming which separates data and functions."
        },
        {
          id: "oops-core-2",
          question: "What is a Class?",
          difficulty: "Easy",
          answer: "A class is a blueprint or template from which objects are created. It defines a datatype by bundling data and methods that work on the data into one single unit.",
          notes: "Classes are logical entities; they do not consume memory when defined."
        },
        {
          id: "oops-core-3",
          question: "What is an Object?",
          difficulty: "Easy",
          answer: "An object is an instance of a class. It is a physical entity that has state (attributes), behavior (methods), and identity (a unique address in memory).",
          notes: "Objects consume memory when created using the 'new' keyword (in languages like Java/C++)."
        },
        {
          id: "oops-core-4",
          question: "What is a Constructor?",
          difficulty: "Medium",
          answer: "A constructor is a special block of code/method that is invoked automatically when an object of the class is created. It has the same name as the class and no return type. Its primary purpose is to initialize the newly created object.",
          notes: "Types: Default constructor, Parameterized constructor, Copy constructor."
        },
        {
          id: "oops-core-5",
          question: "What is a Destructor?",
          difficulty: "Medium",
          answer: "A destructor is a special method called automatically when an object is destroyed or goes out of scope. Its purpose is to free the resources (like memory, files, database connections) acquired by the object during its lifecycle.",
          notes: "In Java, the Garbage Collector handles this, but you can use finalize() (though deprecated)."
        },
        {
          id: "oops-core-6",
          question: "What is the difference between a Struct and a Class?",
          difficulty: "Medium",
          answer: "In C++, the only difference is default visibility: members of a struct are public by default, while members of a class are private by default. In C#, structs are value types (stored on the stack), whereas classes are reference types (stored on the heap).",
          notes: "Structs are typically used for lightweight data structures."
        },
        {
          id: "oops-core-7",
          question: "What is the 'this' pointer/keyword?",
          difficulty: "Medium",
          answer: "The 'this' keyword is a reference variable that refers to the current object. It can be used to refer to current class instance variables, invoke current class methods, or return the current object instance.",
          notes: "Used heavily to resolve ambiguity when instance variables and parameters have the same name."
        },
        {
          id: "oops-core-8",
          question: "What is a Copy Constructor?",
          difficulty: "Hard",
          answer: "A copy constructor is a parameterized constructor that takes an object of the same class as a parameter. It is used to initialize an object using another object of the same class. If you don't define one, the compiler provides a default copy constructor (which does a shallow copy).",
          notes: "Essential when the class contains pointers or dynamic memory allocation (to perform a deep copy)."
        }
      ]
    },
    {
      id: "encap-abstract",
      title: "Encapsulation & Abstraction",
      description: "Data hiding and exposing only necessary details.",
      questions: [
        {
          id: "oops-ea-1",
          question: "What is Encapsulation?",
          difficulty: "Easy",
          answer: "Encapsulation is the bundling of data (variables) and the methods that operate on that data into a single unit (class). It also involves restricting direct access to some of the object's components, which is a means of preventing accidental interference and misuse.",
          notes: "Achieved using access modifiers (private, protected) and providing getter/setter methods."
        },
        {
          id: "oops-ea-2",
          question: "What are Access Modifiers?",
          difficulty: "Easy",
          answer: "Access modifiers define the scope or visibility of a class, constructor, variable, or method.\n1. Public: Accessible from everywhere.\n2. Private: Accessible only within the same class.\n3. Protected: Accessible within the same package and subclasses.\n4. Default (Package-private): Accessible only within the same package.",
          notes: "Crucial for implementing Encapsulation."
        },
        {
          id: "oops-ea-3",
          question: "What is Abstraction?",
          difficulty: "Easy",
          answer: "Abstraction is the process of hiding the complex implementation details and showing only the essential features of an object to the user. It helps in reducing programming complexity and effort.",
          notes: "Example: You know how to drive a car (use the steering wheel and pedals) without knowing how the engine works internally."
        },
        {
          id: "oops-ea-4",
          question: "Difference between Encapsulation and Abstraction?",
          difficulty: "Medium",
          answer: "Encapsulation is about 'Data Hiding' (protecting data from outside interference). Abstraction is about 'Detail Hiding' (hiding internal implementation and showing only functionality).\nEncapsulation groups related items; Abstraction focuses on what an object does rather than how it does it.",
          notes: "Encapsulation is often achieved via private variables. Abstraction is achieved via abstract classes/interfaces."
        },
        {
          id: "oops-ea-5",
          question: "What is an Abstract Class?",
          difficulty: "Medium",
          answer: "An abstract class is a class that is declared abstract—it may or may not include abstract methods (methods without a body). Abstract classes cannot be instantiated, but they can be subclassed.",
          notes: "Used to provide a common template for subclasses."
        },
        {
          id: "oops-ea-6",
          question: "What is an Interface?",
          difficulty: "Medium",
          answer: "An interface is a completely 'abstract class' that is used to group related methods with empty bodies. A class that implements an interface must provide the bodies (implementations) for all of its methods.",
          notes: "Used to achieve 100% abstraction and multiple inheritance in languages like Java/C#."
        },
        {
          id: "oops-ea-7",
          question: "Difference between Abstract Class and Interface?",
          difficulty: "Hard",
          answer: "1. Abstract class can have both abstract and non-abstract methods; Interface can only have abstract methods (prior to Java 8 default methods).\n2. A class can extend only one abstract class but can implement multiple interfaces.\n3. Abstract classes can have instance variables (state); Interfaces can only have public static final constants.\n4. Abstract class constructors are allowed; Interfaces cannot have constructors.",
          notes: "Use Abstract Class when subclasses share state/core logic. Use Interface for defining a contract."
        }
      ]
    },
    {
      id: "inheritance",
      title: "Inheritance",
      description: "Code reusability and establishing IS-A relationships.",
      questions: [
        {
          id: "oops-inh-1",
          question: "What is Inheritance?",
          difficulty: "Easy",
          answer: "Inheritance is a mechanism wherein a new class (subclass/child) derives the properties and characteristics (methods and fields) of an existing class (superclass/parent). It promotes code reusability.",
          notes: "Establishes an 'IS-A' relationship (e.g., Dog IS-A Animal)."
        },
        {
          id: "oops-inh-2",
          question: "What are the types of Inheritance?",
          difficulty: "Medium",
          answer: "1. Single Inheritance: Class B inherits from Class A.\n2. Multilevel Inheritance: Class C inherits from B, which inherits from A.\n3. Hierarchical Inheritance: Classes B and C both inherit from A.\n4. Multiple Inheritance: Class C inherits from both A and B.\n5. Hybrid Inheritance: A mix of two or more types.",
          notes: "Java/C# do not support multiple inheritance with classes to avoid the Diamond Problem."
        },
        {
          id: "oops-inh-3",
          question: "What is the Diamond Problem?",
          difficulty: "Hard",
          answer: "The Diamond Problem is an ambiguity that arises in Multiple Inheritance when two superclasses of a class have a common base class, and both superclasses override a method of the base class. If the subclass calls that method, the compiler doesn't know which version to execute.",
          notes: "C++ solves this using 'virtual inheritance'. Java solves it by using Interfaces instead of multiple class inheritance."
        },
        {
          id: "oops-inh-4",
          question: "What is the 'super' keyword?",
          difficulty: "Medium",
          answer: "The 'super' keyword is a reference variable used to refer to the immediate parent class object. It can be used to invoke parent class methods (when overridden), parent class constructors, or access parent class variables (when hidden by local variables).",
          notes: "super() must be the first statement in a constructor."
        },
        {
          id: "oops-inh-5",
          question: "Can a constructor be inherited?",
          difficulty: "Hard",
          answer: "No, constructors are not inherited by subclasses. However, the subclass constructor MUST implicitly or explicitly call the superclass constructor (using super()) to ensure the parent part of the object is initialized.",
          notes: "If you don't call super(), the compiler inserts a call to the no-arg super() automatically."
        },
        {
          id: "oops-inh-6",
          question: "IS-A vs HAS-A relationship?",
          difficulty: "Medium",
          answer: "IS-A relationship is Inheritance (e.g., A Car IS-A Vehicle). It implies one object is a specialized version of another.\nHAS-A relationship is Composition/Aggregation (e.g., A Car HAS-A Engine). It implies one object contains or is composed of another object.",
          notes: "Favor Composition over Inheritance when designing flexible systems."
        }
      ]
    },
    {
      id: "polymorphism",
      title: "Polymorphism",
      description: "One name, many forms: Overloading and Overriding.",
      questions: [
        {
          id: "oops-poly-1",
          question: "What is Polymorphism?",
          difficulty: "Easy",
          answer: "Polymorphism means 'many forms'. It allows us to perform a single action in different ways. In OOP, it allows objects of different classes to be treated as objects of a common superclass.",
          notes: "Mainly divided into Compile-time and Run-time polymorphism."
        },
        {
          id: "oops-poly-2",
          question: "Explain Compile-time (Static) Polymorphism.",
          difficulty: "Medium",
          answer: "Achieved through Method Overloading or Operator Overloading. The compiler knows exactly which method to call at compile time based on the method signature (number, type, and order of arguments).",
          notes: "Also known as Early Binding."
        },
        {
          id: "oops-poly-3",
          question: "Explain Run-time (Dynamic) Polymorphism.",
          difficulty: "Medium",
          answer: "Achieved through Method Overriding. The method call is resolved at runtime based on the actual object type being referred to, not the reference type. If a parent reference holds a child object, the child's overridden method is called.",
          notes: "Also known as Late Binding or Dynamic Method Dispatch."
        },
        {
          id: "oops-poly-4",
          question: "What is Method Overloading?",
          difficulty: "Easy",
          answer: "Having multiple methods with the same name in the same class, but with different parameters (different type, number, or order).",
          notes: "Return type alone is not sufficient to overload a method."
        },
        {
          id: "oops-poly-5",
          question: "What is Method Overriding?",
          difficulty: "Medium",
          answer: "When a subclass provides a specific implementation for a method that is already defined in its superclass. The method must have the exact same name, return type, and parameters.",
          notes: "Used to provide specific behavior for a subclass."
        },
        {
          id: "oops-poly-6",
          question: "Can we override static methods?",
          difficulty: "Hard",
          answer: "No, you cannot override static methods. Static methods are bound to the class, not the object, so they are resolved at compile time (Static Binding). If a subclass defines a static method with the same signature, it 'hides' the parent method, but it is not overriding.",
          notes: "This is known as Method Hiding."
        },
        {
          id: "oops-poly-7",
          question: "What is Upcasting and Downcasting?",
          difficulty: "Hard",
          answer: "Upcasting: Casting a child object to a parent reference (e.g., Animal a = new Dog()). This is implicit and always safe.\nDowncasting: Casting a parent reference back to a child object (e.g., Dog d = (Dog) a). Must be done explicitly and can throw a ClassCastException if the object isn't actually of that child type.",
          notes: "Use 'instanceof' before downcasting to ensure safety."
        }
      ]
    },
    {
      id: "advanced-oops",
      title: "Advanced OOP Concepts",
      description: "Keywords, memory management, and design principles.",
      questions: [
        {
          id: "oops-adv-1",
          question: "What is the 'static' keyword?",
          difficulty: "Medium",
          answer: "The 'static' keyword means that a member (variable or method) belongs to the class itself, rather than to instances (objects) of the class. There is only one copy of a static variable in memory, shared by all objects.",
          notes: "Static methods cannot access non-static instance variables directly."
        },
        {
          id: "oops-adv-2",
          question: "What is the 'final' (or 'const') keyword?",
          difficulty: "Medium",
          answer: "1. Final Variable: Its value cannot be changed (it becomes a constant).\n2. Final Method: It cannot be overridden by subclasses.\n3. Final Class: It cannot be inherited (e.g., String class in Java).",
          notes: "Provides security and performance optimization."
        },
        {
          id: "oops-adv-3",
          question: "What is Garbage Collection?",
          difficulty: "Easy",
          answer: "Garbage Collection is an automatic memory management feature that periodically scans for objects in the heap memory that are no longer referenced by any part of the program, and deletes them to free up memory.",
          notes: "Prevents memory leaks in languages like Java and C#."
        },
        {
          id: "oops-adv-4",
          question: "Shallow Copy vs Deep Copy?",
          difficulty: "Hard",
          answer: "Shallow Copy: Creates a new object and copies the non-static fields. If fields are references, it copies the reference addresses, so both objects point to the same memory.\nDeep Copy: Creates a new object and recursively creates copies of all referenced objects. The new object is completely independent.",
          notes: "Default clone() in Java does a shallow copy."
        },
        {
          id: "oops-adv-5",
          question: "Explain the SOLID principles.",
          difficulty: "Hard",
          answer: "1. Single Responsibility: A class should have one, and only one, reason to change.\n2. Open/Closed: Open for extension, closed for modification.\n3. Liskov Substitution: Subtypes must be substitutable for their base types.\n4. Interface Segregation: Many client-specific interfaces are better than one general-purpose interface.\n5. Dependency Inversion: Depend on abstractions, not concretions.",
          notes: "The golden rules of Object-Oriented Design."
        },
        {
          id: "oops-adv-6",
          question: "What is a Singleton Class?",
          difficulty: "Medium",
          answer: "A class that can have only one object (an instance of the class) at a time. It provides a global point of access to that instance. Achieved by making the constructor private and providing a public static method that returns the instance.",
          notes: "Commonly used for database connection pools or configuration managers."
        }
      ]
    }
  ]
};
