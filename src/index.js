/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length; 
  let triangles = 0; 
      for (let i = 1; i<=length; i++) { 
        j=preferences[i-1]; 
          if (j==i) continue; 
          k=preferences[j-1]; 
            if(preferences[k-1]==i) { 
            triangles++; 
} 
} 
triangles=triangles/3; 
return triangles; 
};
