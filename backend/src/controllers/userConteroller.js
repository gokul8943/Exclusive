import userModel from "../models/userModel";




export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(400).json({ success: false, message: "Missing reuired fileds" })
        }

        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            res.status(409).json({ success: false, message: "Email is already regitered" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ name, email, phone, password: hashedPassword });
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.status(201).json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).jaon({ success: false, message: "Missing required" })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' });
            const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
            res.status(200).json({ sucess: true, accessToken, refreshToken, user: { name: user.name } })
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "ineternal server error" })
    }

} 
