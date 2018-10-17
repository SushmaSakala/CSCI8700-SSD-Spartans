<form action="action_page.php" style="border:1px solid #ccc">
 <link rel="stylesheet" href="styles.css">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label><nbsp></nbsp>
    <input type="text" placeholder="Enter Email" name="email" required>

    <p>
    <label for="psw"><b>Password</b></label><nbsp></nbsp>
    <input type="password" placeholder="Enter Password" name="psw" required>
    </p>

    <p>
    <label for="psw-repeat"><b>Repeat Password</b></label><nbsp></nbsp>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    </p>
    
    <p>
    <label for="fn"><b>Firstname</b></label><nbsp></nbsp>
    <input type="text" placeholder="Enter firstname" name="fn" required>
    </p>

    <p>
    <label for="ln"><b>Lastname</b></label><nbsp></nbsp>
    <input type="text" placeholder="Enter Lastname" name="ln" required>
    </p>

     <p>
    <label for="gen"><b>Gender</b></label><nbsp></nbsp>
    <input type="text" placeholder="Gender" name="gen" required>
    </p>
     
     <p>
    <label for="adr"><b>Address</b></label><nbsp></nbsp>
    <input type="text" placeholder="Enter address" name="adr" required>
    </p>

     <p>
    <label for="phn"><b>Phone Number</b></label><nbsp></nbsp>
    <input type="type" placeholder="Enter Phone No" name="phn" required>
    </p>

    
    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</link>
</form>