function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints


	let rightObject = [
        //OBJECT 1
        //front square
            //top left triangle
            3.57583, 7.65328, 0.0, 0.0, 0.0, 
            7.09618, 7.80354, 0.0, 0.0, 0.0, 
				  4, 	 1.5, 0.0, 0.0, 0.0, 
            
            //bottom right triangle
			6.97937, 1.60925, 0.0, 0.0, 0.0, 
			7.09618, 7.80354, 0.0, 0.0, 0.0, 
				  4, 	 1.5, 0.0, 0.0, 0.0, 
            
        //curve top 1
            //top left
            3.57583, 7.65328, 1.0, 1.0, 1.0,
			3.62554, 8.43777, 1.0, 1.0, 1.0,
            7.09618, 7.80354, 1.0, 1.0, 1.0,

            //bottom right
            7.03559, 8.45088, 1.0, 1.0, 1.0,
            3.62554, 8.43777, 1.0, 1.0, 1.0,
            7.09618, 7.80354, 1.0, 1.0, 1.0,
            
        //curve top 2
            //top left
            3.62554, 8.43777, 1.0, 1.0, 1.0,
            3.87474, 8.94927, 1.0, 1.0, 1.0,
            7.03559, 8.45088, 1.0, 1.0, 1.0,

            //bottom right
            6.44539, 9.38209, 1.0, 1.0, 1.0,
            4.29444,  9.3952, 1.0, 1.0, 1.0,
            6.81262,  8.9755, 1.0, 1.0, 1.0,
            
        //curve top 3
			//top left
            3.87474, 8.94927, 1.0, 1.0, 1.0,
            4.29444,  9.3952, 1.0, 1.0, 1.0,
			6.81262,  8.9755, 1.0, 1.0, 1.0,

			//bottom right
            6.81262,  8.9755, 1.0, 1.0, 1.0,
            3.87474, 8.94927, 1.0, 1.0, 1.0,
            7.03559, 8.45088, 1.0, 1.0, 1.0,
			   
		//curve top 4
			//top left
            4.29444,  9.3952, 1.0, 1.0, 1.0,
            4.56986, 9.63128, 1.0, 1.0, 1.0,
			6.44539, 9.38209, 1.0, 1.0, 1.0,

		//bottom right
            6.44539, 9.38209, 1.0, 1.0, 1.0,
            5.96011, 9.72309, 1.0, 1.0, 1.0,
            4.29444,  9.3952, 1.0, 1.0, 1.0,
		
		//curve top 5
			//top left
            4.56986, 9.63128, 1.0, 1.0, 1.0,
            5.96011, 9.72309, 1.0, 1.0, 1.0,
			4.29444,  9.3952, 1.0, 1.0, 1.0,
			
        //curve bottom 1
			//bottom left
			    4.0,	 1.5, 1.0, 1.0, 1.0,
            6.97937, 1.60925, 1.0, 1.0, 1.0,
			    4.0, 	 1.0, 1.0, 1.0, 1.0,

			//bottom right
            6.97937, 1.60925, 1.0, 1.0, 1.0,
			      4, 	 1.5, 1.0, 1.0, 1.0,
		       	  7, 	   1, 1.0, 1.0, 1.0,

		//curve bottom 2
			//bottom left
			4,   1, 1.0, 1.0, 1.0,
			7,   1, 1.0, 1.0, 1.0,
			4, 1.5, 1.0, 1.0, 1.0,

			//bottom right
				  4, 	   1, 1.0, 1.0, 1.0,
				  7, 	   1, 1.0, 1.0, 1.0,
            4.20793, 0.67148, 1.0, 1.0, 1.0,

        //curve bottom 3
			//bottom right
				  7, 	   1, 1.0, 1.0, 1.0,
				  4, 	   1, 1.0, 1.0, 1.0,
            6.78261, 0.63751, 1.0, 1.0, 1.0,

			//bottom left
            4.20793, 0.67148, 1.0, 1.0, 1.0,
            6.78261, 0.63751, 1.0, 1.0, 1.0,
				  4, 	   1, 1.0, 1.0, 1.0,

		//curve bottom 4
			//bottom right
			4.20793, 0.67148, 1.0, 1.0, 1.0,
			6.78261, 0.63751, 1.0, 1.0, 1.0,
			4.54251, 0.36175, 1.0, 1.0, 1.0,

			//bottom left
			6.78261, 0.63751, 1.0, 1.0, 1.0,
			4.20793, 0.67148, 1.0, 1.0, 1.0,
			6.43066, 0.29813, 1.0, 1.0, 1.0,

        //curva bottom 5
            //bottom left
            4.54251, 0.36175, 1.0, 1.0, 1.0,
            6.78261, 0.63751, 1.0, 1.0, 1.0,
            5.01173, 0.15236, 1.0, 1.0, 1.0,

            //bottom right
            6.01586, 0.13472, 1.0, 1.0, 1.0,
            6.43066, 0.29813, 1.0, 1.0, 1.0,
            4.20793, 0.67148, 1.0, 1.0, 1.0,
				
		//curva bottom 6
            //bottom left
            5.49523, 0.07033, 1.0, 1.0, 1.0,
            5.01173, 0.15236, 1.0, 1.0, 1.0,
            6.78261, 0.63751, 1.0, 1.0, 1.0,

            //bottom right
            5.49523, 0.07033, 1.0, 1.0, 1.0,
            6.01586, 0.13472, 1.0, 1.0, 1.0,
            4.20793, 0.67148, 1.0, 1.0, 1.0,
				
		//bottle cap
            //top left 
            4.36079, 12.26201, 0.0, 0.0, 0.0, 
            5.89004, 12.43351, 0.0, 0.0, 0.0, 
			4.56986,  9.63128, 0.0, 0.0, 0.0, 
           
            //bottom right 
			5.96011,  9.72309, 0.0, 0.0, 0.0, 
			5.89004, 12.43351, 0.0, 0.0, 0.0, 
			4.56986,  9.63128, 0.0, 0.0, 0.0, 
            
    ];
	
	let leftObject = [
        //OBJECT 2 KIRI
		//front square
            //top left triangle
            -2.42417, 7.65328, 0.0, 0.0, 0.0, 
             1.09618, 7.80354, 0.0, 0.0, 0.0, 
				  -2, 	  1.5, 0.0, 0.0, 0.0,  
            
            //bottom right triangle
			0.97937, 1.60925, 0.0, 0.0, 0.0, 
			1.09618, 7.80354, 0.0, 0.0, 0.0, 
				 -2, 	 1.5, 0.0, 0.0, 0.0, 
            
        //curve top 1
            //top left
            -2.42417, 7.65328, 1.0, 1.0, 1.0,
			-2.37446, 8.43777, 1.0, 1.0, 1.0,
             1.09618, 7.80354, 1.0, 1.0, 1.0,

            //bottom right
             1.03559, 8.45088, 1.0, 1.0, 1.0,
			-2.37446, 8.43777, 1.0, 1.0, 1.0,
             1.09618, 7.80354, 1.0, 1.0, 1.0,
            
        //curve top 2
            //top left
            -2.37446, 8.43777, 1.0, 1.0, 1.0,
            -2.12526, 8.94927, 1.0, 1.0, 1.0,
             1.03559, 8.45088, 1.0, 1.0, 1.0,

            //bottom right
             0.44539, 9.38209, 1.0, 1.0, 1.0,
            -1.70556,  9.3952, 1.0, 1.0, 1.0,
             0.81262,  8.9755, 1.0, 1.0, 1.0,
            
        //curve top 3
			//top left
			-2.12526, 8.94927, 1.0, 1.0, 1.0,
			-1.70556,  9.3952, 1.0, 1.0, 1.0,
			 0.81262,  8.9755, 1.0, 1.0, 1.0,

			//bottom right
             0.81262,  8.9755, 1.0, 1.0, 1.0,
            -2.12526, 8.94927, 1.0, 1.0, 1.0,
             1.03559, 8.45088, 1.0, 1.0, 1.0,
			   
		//curve top 4
			//top left
            -1.70556,  9.3952, 1.0, 1.0, 1.0,
			-1.43014, 9.63128, 1.0, 1.0, 1.0,
			 0.44539, 9.38209, 1.0, 1.0, 1.0,

		//bottom right
             0.44539, 9.38209, 1.0, 1.0, 1.0,
            -0.03989, 9.72309, 1.0, 1.0, 1.0,
			-1.70556,  9.3952, 1.0, 1.0, 1.0,
		
		//curve top 5
			//top left
            -1.43014, 9.63128, 1.0, 1.0, 1.0,
            -0.03989, 9.72309, 1.0, 1.0, 1.0,
			-1.70556,  9.3952, 1.0, 1.0, 1.0,
			
        //curve bottom 1
			//bottom left
			   -2.0,	 1.5, 1.0, 1.0, 1.0,
            0.97937, 1.60925, 1.0, 1.0, 1.0,
			   -2.0, 	 1.0, 1.0, 1.0, 1.0,

			//bottom right
            0.97937, 1.60925, 1.0, 1.0, 1.0,
			   -2.0, 	 1.5, 1.0, 1.0, 1.0,
				1.0, 	 1.0, 1.0, 1.0, 1.0,

		//curve bottom 2
			//bottom left
			-2.0,   1, 1.0, 1.0, 1.0,
			 1.0,   1, 1.0, 1.0, 1.0,
			-2.0, 1.5, 1.0, 1.0, 1.0,

			//bottom right
				 -2.0, 	     1, 1.0, 1.0, 1.0,
				  1.0, 	     1, 1.0, 1.0, 1.0,
             -1.79207, 0.67148, 1.0, 1.0, 1.0,

        //curve bottom 3
			//bottom right
				1.0, 	   1, 1.0, 1.0, 1.0,
			   -2.0, 	   1, 1.0, 1.0, 1.0,
            0.78261, 0.63751, 1.0, 1.0, 1.0,

			//bottom left
            -1.79207, 0.67148, 1.0, 1.0, 1.0,
             0.78261, 0.63751, 1.0, 1.0, 1.0,
			    -2.0, 	  1.0, 1.0, 1.0, 1.0,

		//curve bottom 4
			//bottom right
			-1.79207, 0.67148, 1.0, 1.0, 1.0,
			 0.78261, 0.63751, 1.0, 1.0, 1.0,
			-1.45749, 0.36175, 1.0, 1.0, 1.0,

			//bottom left
			 0.78261, 0.63751, 1.0, 1.0, 1.0,
			-1.79207, 0.67148, 1.0, 1.0, 1.0,
			 0.43066, 0.29813, 1.0, 1.0, 1.0,

        //curva bottom 5
            //bottom left
			-1.45749, 0.36175, 1.0, 1.0, 1.0,
             0.78261, 0.63751, 1.0, 1.0, 1.0,
            -0.98827, 0.15236, 1.0, 1.0, 1.0,

            //bottom right
             0.01586, 0.13472, 1.0, 1.0, 1.0,
			 0.43066, 0.29813, 1.0, 1.0, 1.0,
			-1.79207, 0.67148, 1.0, 1.0, 1.0,
				
		//curva bottom 6
            //bottom left
            -0.50477, 0.07033, 1.0, 1.0, 1.0,
			-0.98827, 0.15236, 1.0, 1.0, 1.0,
             0.78261, 0.63751, 1.0, 1.0, 1.0,

            //bottom right
            -0.50477, 0.07033, 1.0, 1.0, 1.0,
             0.01586, 0.13472, 1.0, 1.0, 1.0,
            -1.79207, 0.67148, 1.0, 1.0, 1.0,
				
		//bottle cap
            //top left 
            -1.63921, 12.26201, 0.0, 0.0, 0.0, 
            -0.10996, 12.43351, 0.0, 0.0, 0.0, 
			-1.43014,  9.63128, 0.0, 0.0, 0.0, 
            
            //bottom right 
			-0.03989,  9.72309, 0.0, 0.0, 0.0, 
			-0.10996, 12.43351, 0.0, 0.0, 0.0, 
			-1.43014,  9.63128, 0.0, 0.0, 0.0, 
		
	];
	 
	var vertices = [
		...rightObject,
		...leftObject
    ];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform mat4 uMatrix;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = uMatrix * vec4(aPosition, 0.0, 20.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;
   // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
	
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
	
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick, false);

    // var speed = [0, 1/600];
    // Create a uniform to animate the vertices
    // var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    // var change = [0, 0];

    var dy = 0;
    var speed = 0.0016;
    function render() {
        if(dy >= 0.35 || dy <= -0.95)
            speed = -speed;

        dy += speed;
        gl.useProgram(shaderProgram);

        const leftPosition = [
              1.0, 0.0, 0.0, 0.0,
              0.0, 1.0, 0.0, 0.0,
              0.0, 0.0, 1.0, 0.0,
            -0.25, 0.0, 0.0, 1.0,
        ]
            
        const rightPosition = [
             1.0, 0.0, 0.0, 0.0,
             0.0, 1.0, 0.0, 0.0,
             0.0, 0.0, 1.0, 0.0,
			 0.0,  dy, 0.0, 1.0,
        ]
        
        gl.clearColor(0.8,0.6,0.12,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const uMatrix = gl.getUniformLocation(shaderProgram, 'uMatrix');

        gl.uniformMatrix4fv(uMatrix, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, 0, rightObject.length/5);

        gl.uniformMatrix4fv(uMatrix, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, rightObject.length/5, leftObject.length/5);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}