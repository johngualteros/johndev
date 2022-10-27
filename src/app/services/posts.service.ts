import { Injectable } from '@angular/core';
import { Post } from '../class/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    {
      id: 1,
      logo: '../../../assets/posts/java.png',
      title: 'Testing en Java con JUnit',
      date: '24 de octubre 2022',
      content: `
      <p>Esta es una breve introducción al <span class="bold">testing</span> en <span class="bold">Java</span>
      con <span class="bold">JUnit</span> antes que nada, ¿qué es el <span class="bold">testing</span>? El testing es una técnica
      que nos permite verificar que nuestro código funciona correctamente, es decir, que cumple con
      las especificaciones que nosotros le hemos dado. En el mundo del desarrollo de software, el testing
      es una práctica muy importante, ya que nos permite <span class="bold">detectar errores</span> en nuestro código antes de
      que el usuario los detecte, y así poder corregirlos antes de que el usuario los note. En este
      artículo, vamos a ver cómo hacer testing en <span class="bold">Java</span> con <span class="bold">JUnit</span>, una de las herramientas más populares
      para hacer testing en <span class="bold">Java</span>.</p>
      <br>
      <p>
      Para implementar testing en <span class="bold">Java</span> crearemos un proyecto <span class="bold">Maven</span>
      con <span class="bold">JUnit</span> como dependencia, y crearemos una clase de prueba para probar
      antes que nada vamos a añadir la dependencia en nuestro <span class="bold">pom.xml</span>:
      </p>
      <br>
      <pre>
      <code>
      <span class="blue">&lt;dependency&gt;</span>
        <span class="blue">&lt;groupId&gt;</span> org.junit.jupiter <span class="blue">&lt;/groupId&gt;</span>
        <span class="blue">&lt;artifactId&gt;</span> junit-jupiter <span class="blue">&lt;/artifactId&gt;</span>
        <span class="blue">&lt;version&gt;</span> 5.8.2 <span class="blue">&lt;/version&gt;</span>
      <span class="blue">&lt;/dependency&gt;</span>
      </code>
      </pre>
      <br>
      <p>
      Ahora vamos a crear una clase de prueba, para ello vamos a crear una clase llamada <span class="bold">SimpleCalculator</span>:
      donde crearemos un método <span class="bold">sum</span> que recibe dos números y devuelve la suma de ambos:
      algo así quedaria el codigo:
      </p>
      <br>
      <pre>
      <code>
      <span class="pink">public class</span> <span class="blue">SimpleCalculator</span> {
        <span class="pink">public</span> <span class="purple">int</span> sum(<span class="green">int</span> a, <span class="green">int</span> b) {
          <span class="purple">return</span> a + b;
        }
      }
      </code>
      </pre>
      <br>
      <p>
      Ahora vamos a crear una clase de prueba, para ello vamos a crear una clase llamada <span class="bold">SimpleCalculatorTest</span> dentro
      de nuestra carpeta llamada test
      </p>
      <br>
      <p>
      Debemos tener en cuenta que cada metodo debe tener una anotación <span class="bold">@Test</span> para que JUnit lo reconozca como un método de prueba.
      además, cada método de prueba debe ser <span class="bold">público</span> y <span class="bold">no devolver nada</span> (void).
      </p>
      <br>
      <p>
      <span class="bold">JUnit</span> nos permite crear <span class="bold">aserciones</span> para verificar que nuestro código funciona correctamente.
      Las aserciones son comparaciones entre el valor esperado y el valor obtenido, si el valor esperado
      es igual al valor obtenido, la aserción pasa, si no, la aserción falla. <span class="bold">JUnit</span> nos proporciona
      una serie de métodos para crear aserciones, por ejemplo, el método <span class="bold">assertEquals</span> que recibe dos parámetros,
      el valor esperado y el valor obtenido, y comprueba que ambos sean iguales.
      </p>
      <br>
      <pre>
      <code>
      <span class="pink">import</span> <span class="blue">org.junit.jupiter.api.Test</span>;
      <span class="pink">import</span> <span class="blue">static org.junit.jupiter.api.Assertions.assertEquals</span>;

      <span class="pink">public class</span> <span class="blue">SimpleCalculatorTest</span> {
        <span class="pink">private</span> <span class="blue">SimpleCalculator</span> calculator = <span class="purple">new</span> <span class="blue">SimpleCalculator</span>();

        <span class="blue">@Test</span>
        <span class="pink">public void</span> <span class="blue">twoPlusThreeShouldEqualsFive</span>() {
          <span class="blue">assertEquals</span>(<span class="green">5</span>, calculator.sum(<span class="green">2</span>, <span class="green">3</span>));
        }
      }
      </code>
      </pre>
      <p>
      como buena practica el metodo debe llamarse con la descripción de que números debería ser igual a la respuesta.
      además escribimos el codigo en ingles para que sea mas entendible.
      </p>
      `,
      category: ['Java', 'Testing', 'JUnit']
    },
    {
      id: 2,
      logo: '../../../assets/posts/springboot.png',
      title: 'Testeando api rest con springboot y JUnit',
      date: '25 de octubre 2022',
      content: `
      <p>Esta es una breve introducción al <span class="bold">testing</span> en <span class="bold">Java</span>
      con <span class="bold">JUnit</span></p>
      `,
      category: ['Java', 'Testing', 'JUnit', 'Springboot', 'Rest']
    },
    {
      id: 3,
      logo: '../../../assets/posts/code.png',
      title: 'Mejores Temas de Visual Studio Code',
      date: '26 de octubre 2022',
      content: `
      <p>
      Los temas son una de las cosas más importantes en un editor de código, ya que
      nos permiten personalizar la apariencia de nuestro editor de código. En este artículo
      vamos a ver los mejores temas de <span class="bold">Visual Studio Code</span> que puedes usar
      para mejorar tu experiencia de desarrollo.
      </p>
      <br>
      <h3>GruvBox Theme</h3>
      <img src="../../../assets/posts/gruvbox.png" alt="gruvbox">
      <br>
      <h3>Hack The Box Theme</h3>
      <img src="../../../assets/posts/hackbox.png" alt="hackthebox">
      <br>
      <h3>Dracula Theme</h3>
      <img src="../../../assets/posts/dracula.png" alt="dracula">
      <br>
      <h3>Eva Theme</h3>
      <img src="../../../assets/posts/eva.png" alt="eva">
      `,
      category: ['VSCode', 'Extensiones']
    }
  ]
  constructor() { }

  getPosts() {
    return this.posts;
  }
  getPostById(id: number){
    return this.posts.find(post => post.id === id);
  }
  getPostByCategory(category: string){
    return this.posts.filter(post => post.category.includes(category));
  }
}
