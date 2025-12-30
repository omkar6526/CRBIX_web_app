import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const AuthForm = () => {
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', formData);
    // Add registration logic
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', { email: formData.email, password: formData.password });
    // Add login logic
  };

  // Main container styles
  const pageStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: "'Poppins', sans-serif",
    minHeight: '100vh',
    padding: '20px'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#fff',
    marginBottom: '30px',
    fontSize: '32px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const wrapperStyles = {
    backgroundColor: '#fff',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    width: '850px',
    maxWidth: '100%',
    minHeight: '550px'
  };

  const formBoxStyles = {
    position: 'absolute',
    top: '0',
    height: '100%',
    transition: 'all 0.6s ease-in-out'
  };

  const loginFormBoxStyles = {
    ...formBoxStyles,
    left: '0',
    width: '50%',
    zIndex: 2,
    transform: isPanelActive ? 'translateX(100%)' : 'translateX(0)'
  };

  const registerFormBoxStyles = {
    ...formBoxStyles,
    left: '0',
    width: '50%',
    opacity: isPanelActive ? '1' : '0',
    zIndex: isPanelActive ? 5 : 1,
    transform: isPanelActive ? 'translateX(100%)' : 'translateX(0)'
  };

  const slidePanelWrapperStyles = {
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '50%',
    height: '100%',
    overflow: 'hidden',
    transition: 'transform 0.6s ease-in-out',
    zIndex: 100,
    transform: isPanelActive ? 'translateX(-100%)' : 'translateX(0)'
  };

  const slidePanelStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFFFFF',
    position: 'relative',
    left: '-100%',
    height: '100%',
    width: '200%',
    transform: isPanelActive ? 'translateX(50%)' : 'translateX(0)',
    transition: 'transform 0.6s ease-in-out'
  };

  const panelContentStyles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px',
    textAlign: 'center',
    top: '0',
    height: '100%',
    width: '50%',
    transition: 'transform 0.6s ease-in-out'
  };

  const panelLeftStyles = {
    ...panelContentStyles,
    transform: isPanelActive ? 'translateX(0)' : 'translateX(-20%)'
  };

  const panelRightStyles = {
    ...panelContentStyles,
    right: '0',
    transform: isPanelActive ? 'translateX(20%)' : 'translateX(0)'
  };

  const formStyles = {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 50px',
    height: '100%',
    textAlign: 'center'
  };

  const inputStyles = {
    backgroundColor: '#f3f4f6',
    border: '2px solid transparent',
    borderRadius: '12px',
    padding: '14px 18px',
    margin: '8px 0',
    width: '100%',
    fontSize: '14px',
    transition: 'all 0.3s ease'
  };

  const buttonStyles = {
    borderRadius: '25px',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: '600',
    padding: '14px 50px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    marginTop: '10px'
  };

  const transparentButtonStyles = {
    ...buttonStyles,
    background: 'transparent',
    border: '2px solid #FFFFFF',
    boxShadow: 'none'
  };

  const socialLinkStyles = {
    border: '2px solid #e0e0e0',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45px',
    width: '45px',
    transition: 'all 0.3s ease',
    color: '#667eea',
    fontSize: '18px',
    textDecoration: 'none',
    margin: '0 8px'
  };

  // Media query styles for mobile
  const isMobile = window.innerWidth <= 768;

  const mobileWrapperStyles = isMobile ? {
    minHeight: 'auto',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '15px'
  } : {};

  const mobileFormBoxStyles = isMobile ? {
    position: 'static',
    width: '100%',
    transform: 'none',
    opacity: '1',
    display: isPanelActive ? 'none' : 'block'
  } : {};

  const mobileRegisterFormBoxStyles = isMobile ? {
    position: 'static',
    width: '100%',
    display: isPanelActive ? 'block' : 'none'
  } : {};

  const mobileSlidePanelStyles = isMobile ? {
    display: 'none'
  } : {};

  const mobileFormStyles = isMobile ? {
    padding: '30px 25px',
    position: 'static',
    height: 'auto'
  } : {};

  return (
    <div style={pageStyles}>
      <h2 style={headingStyle}>Welcome to Our Platform</h2>
      
      <div style={{ ...wrapperStyles, ...mobileWrapperStyles }}>
        {/* Register Form */}
        <div style={{ ...registerFormBoxStyles, ...mobileRegisterFormBoxStyles }}>
          <form style={{ ...formStyles, ...mobileFormStyles }} onSubmit={handleRegisterSubmit}>
            <h1 style={{ fontWeight: '700', margin: '0', fontSize: isMobile ? '22px' : '28px' }}>
              Create Account
            </h1>
            
            <div style={{ margin: '25px 0', display: 'flex', gap: '15px' }}>
              <a href="#" aria-label="Facebook" style={socialLinkStyles}>
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Google" style={socialLinkStyles}>
                <FaGoogle />
              </a>
              <a href="#" aria-label="LinkedIn" style={socialLinkStyles}>
                <FaLinkedinIn />
              </a>
            </div>
            
            <span style={{ fontSize: '13px', color: '#666', margin: '10px 0' }}>
              or use your email for registration
            </span>
            
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              style={inputStyles}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={inputStyles}
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={inputStyles}
            />
            
            <button type="submit" style={buttonStyles}>Sign Up</button>
            
            {isMobile && (
              <div style={{ display: 'block', marginTop: '20px', color: '#667eea', fontSize: '14px' }}>
                <p style={{ margin: '10px 0', fontSize: '14px' }}>Already have an account?</p>
                <button 
                  type="button"
                  style={{ ...buttonStyles, background: 'transparent', color: '#667eea', border: '2px solid #667eea', padding: '10px 30px', boxShadow: 'none' }}
                  onClick={() => setIsPanelActive(false)}
                >
                  Sign In
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Login Form */}
        <div style={{ ...loginFormBoxStyles, ...mobileFormBoxStyles }}>
          <form style={{ ...formStyles, ...mobileFormStyles }} onSubmit={handleLoginSubmit}>
            <h1 style={{ fontWeight: '700', margin: '0', fontSize: isMobile ? '22px' : '28px' }}>
              Sign In
            </h1>
            
            <div style={{ margin: '25px 0', display: 'flex', gap: '15px' }}>
              <a href="#" aria-label="Facebook" style={socialLinkStyles}>
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Google" style={socialLinkStyles}>
                <FaGoogle />
              </a>
              <a href="#" aria-label="LinkedIn" style={socialLinkStyles}>
                <FaLinkedinIn />
              </a>
            </div>
            
            <span style={{ fontSize: '13px', color: '#666', margin: '10px 0' }}>
              or use your account
            </span>
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={inputStyles}
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={inputStyles}
            />
            
            <a href="#" style={{ color: '#667eea', fontSize: '14px', textDecoration: 'none', margin: '15px 0' }}>
              Forgot your password?
            </a>
            
            <button type="submit" style={buttonStyles}>Sign In</button>
            
            {isMobile && (
              <div style={{ display: 'block', marginTop: '20px', color: '#667eea', fontSize: '14px' }}>
                <p style={{ margin: '10px 0', fontSize: '14px' }}>Don't have an account?</p>
                <button 
                  type="button"
                  style={{ ...buttonStyles, background: 'transparent', color: '#667eea', border: '2px solid #667eea', padding: '10px 30px', boxShadow: 'none' }}
                  onClick={() => setIsPanelActive(true)}
                >
                  Sign Up
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Slide Panel - Hidden on mobile */}
        {!isMobile && (
          <div style={{ ...slidePanelWrapperStyles, ...mobileSlidePanelStyles }}>
            <div style={slidePanelStyles}>
              <div style={panelLeftStyles}>
                <h1 style={{ fontWeight: '700', margin: '0', fontSize: '28px' }}>Welcome Back!</h1>
                <p style={{ fontSize: '15px', fontWeight: '300', lineHeight: '24px', letterSpacing: '0.5px', margin: '20px 0 30px' }}>
                  Stay connected by logging in with your credentials and continue your experience
                </p>
                <button 
                  style={transparentButtonStyles}
                  onClick={() => setIsPanelActive(false)}
                >
                  Sign In
                </button>
              </div>
              
              <div style={panelRightStyles}>
                <h1 style={{ fontWeight: '700', margin: '0', fontSize: '28px' }}>Hey There!</h1>
                <p style={{ fontSize: '15px', fontWeight: '300', lineHeight: '24px', letterSpacing: '0.5px', margin: '20px 0 30px' }}>
                  Begin your amazing journey by creating an account with us today
                </p>
                <button 
                  style={transparentButtonStyles}
                  onClick={() => setIsPanelActive(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;