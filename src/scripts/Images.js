import tree1 from '../images/tree1.png'
import tree2 from '../images/tree2.png'
import tree3 from '../images/tree3.png'
import tree4 from '../images/tree4.png'
import tree5 from '../images/tree5.png'
import tree6 from '../images/tree6.png'
import tree7 from '../images/tree7.png'
import tree8 from '../images/tree8.png'
import tree9 from '../images/tree9.png'

//handles switching hangman tree pictures ie growing it
class Images{
    constructor(){
        this.images = [tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9];
        this.imageIndex = 0;
        this.currentImage = this.images[this.imageIndex];
    }

    //returns current image based on image index
    getCurrentImage(){
        return this.currentImage;
    }

    //returns next image in images array
    getNextImage(){
        this.setNextImage();
        return this.currentImage;
    }

    //sets the current image to be next one in images array
    setNextImage(){
        this.imageIndex++;
        if(this.imageIndex < this.images.length){
            this.currentImage = this.images[this.imageIndex];
        }
    }

    //returns boolean whether current image is the last one in images array
    isLastImageReached(){
        if(this.imageIndex < this.images.length-1){
            return false;
        }
        else{
            return true;
        }
    }
}

export default Images;