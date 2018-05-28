var rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x, y) => (x*y),
    volume: (x, y,z) => (x*y*z)
};

function solveRect(l,b,w) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b + "width w =", w);

    if (l <= 0 || b <= 0 || w <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
        console.log("The volume of the rectangle is " + rect.volume(l,b));
    }
}

solveRect(2,4,5);
solveRect(3,5,4);
solveRect(0,5,2);
solveRect(-3,5,6);